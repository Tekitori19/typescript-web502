import { Card } from "./models/card.js";

export default class MemoryGame {
    private playerName: string = '';
    private cards: Card[] = [];
    private flippedCards: Card[] = [];
    private moves: number = 0;
    private isLocked: boolean = false;

    private readonly loginScreen: HTMLElement;
    private readonly gameScreen: HTMLElement;
    private readonly playerNameInput: HTMLInputElement;
    private readonly nameError: HTMLElement;
    private readonly displayName: HTMLElement;
    private readonly gameBoard: HTMLElement;
    private readonly movesDisplay: HTMLElement;

    constructor() {
        // Initialize DOM elements
        this.loginScreen = document.getElementById('login-screen') as HTMLElement;
        this.gameScreen = document.getElementById('game-screen') as HTMLElement;
        this.playerNameInput = document.getElementById('player-name') as HTMLInputElement;
        this.nameError = document.getElementById('name-error') as HTMLElement;
        this.displayName = document.getElementById('display-name') as HTMLElement;
        this.gameBoard = document.getElementById('game-board') as HTMLElement;
        this.movesDisplay = document.getElementById('moves') as HTMLElement;

        // Bind event listeners
        document.getElementById('start-game')?.addEventListener('click', () => this.startGame());
        document.getElementById('reset-game')?.addEventListener('click', () => this.resetGame());
        document.getElementById('cancel-game')?.addEventListener('click', () => this.cancelGame());
    }

    private validatePlayerName(name: string): boolean {
        if (!name.trim() || name.length < 2) return false;
        const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        return !specialChars.test(name);
    }

    private initializeCards(): void {
        const emojis = ['🎮', '🎲', '🎯', '🎨', '🎭', '🎪', '🎢', '🎠'];
        this.cards = [...emojis, ...emojis]
            .map((value, index) => ({
                id: index,
                value,
                isFlipped: false,
                isMatched: false
            }))
            .sort(() => Math.random() - 0.5);
    }

    private createBoard(): void {
        this.gameBoard.innerHTML = '';
        this.cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.dataset.id = card.id.toString();
            cardElement.addEventListener('click', () => this.flipCard(card));
            this.gameBoard.appendChild(cardElement);
        });
    }

    private async flipCard(card: Card): Promise<void> {
        if (this.isLocked || card.isMatched || card.isFlipped || this.flippedCards.length === 2) return;

        card.isFlipped = true;
        this.flippedCards.push(card);
        this.updateCardUI(card);

        if (this.flippedCards.length === 2) {
            this.moves++;
            this.movesDisplay.textContent = this.moves.toString();
            this.isLocked = true;

            const [card1, card2] = this.flippedCards;
            if (card1.value === card2.value) {
                card1.isMatched = card2.isMatched = true;
                this.isLocked = false;
                this.flippedCards = [];

                if (this.cards.every(card => card.isMatched)) {
                    setTimeout(() => alert(`Chúc mừng! Bạn đã hoàn thành trong ${this.moves} lượt!`), 500);
                }
            } else {
                setTimeout(() => {
                    card1.isFlipped = card2.isFlipped = false;
                    this.updateCardUI(card1);
                    this.updateCardUI(card2);
                    this.isLocked = false;
                    this.flippedCards = [];
                }, 1000);
            }
        }
    }

    private updateCardUI(card: Card): void {
        const cardElement = this.gameBoard.querySelector(`[data-id="${card.id}"]`) as HTMLElement;
        cardElement.className = `card${card.isFlipped ? ' flipped' : ''}`;
        cardElement.textContent = card.isFlipped ? card.value : '';
    }

    private startGame(): void {
        const name = this.playerNameInput.value;
        if (this.validatePlayerName(name)) {
            this.playerName = name;
            this.displayName.textContent = this.playerName;
            this.nameError.style.display = 'none';
            this.loginScreen.classList.remove('active');
            this.gameScreen.classList.add('active');
            this.resetGame();
        } else {
            this.nameError.style.display = 'block';
        }
    }

    private resetGame(): void {
        this.moves = 0;
        this.movesDisplay.textContent = '0';
        this.flippedCards = [];
        this.isLocked = false;
        this.initializeCards();
        this.createBoard();
    }

    private cancelGame(): void {
        this.playerNameInput.value = '';
        this.nameError.style.display = 'none';
        this.gameScreen.classList.remove('active');
        this.loginScreen.classList.add('active');
    }
}
