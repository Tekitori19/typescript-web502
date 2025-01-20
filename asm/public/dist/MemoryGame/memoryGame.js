var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class MemoryGame {
    constructor() {
        var _a, _b, _c;
        this.playerName = '';
        this.cards = [];
        this.flippedCards = [];
        this.moves = 0;
        this.isLocked = false;
        // Initialize DOM elements
        this.loginScreen = document.getElementById('login-screen');
        this.gameScreen = document.getElementById('game-screen');
        this.playerNameInput = document.getElementById('player-name');
        this.nameError = document.getElementById('name-error');
        this.displayName = document.getElementById('display-name');
        this.gameBoard = document.getElementById('game-board');
        this.movesDisplay = document.getElementById('moves');
        // Bind event listeners
        (_a = document.getElementById('start-game')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => this.startGame());
        (_b = document.getElementById('reset-game')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => this.resetGame());
        (_c = document.getElementById('cancel-game')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => this.cancelGame());
    }
    validatePlayerName(name) {
        if (!name.trim() || name.length < 2)
            return false;
        const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        return !specialChars.test(name);
    }
    initializeCards() {
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
    createBoard() {
        this.gameBoard.innerHTML = '';
        this.cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.dataset.id = card.id.toString();
            cardElement.addEventListener('click', () => this.flipCard(card));
            this.gameBoard.appendChild(cardElement);
        });
    }
    flipCard(card) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isLocked || card.isMatched || card.isFlipped || this.flippedCards.length === 2)
                return;
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
                }
                else {
                    setTimeout(() => {
                        card1.isFlipped = card2.isFlipped = false;
                        this.updateCardUI(card1);
                        this.updateCardUI(card2);
                        this.isLocked = false;
                        this.flippedCards = [];
                    }, 1000);
                }
            }
        });
    }
    updateCardUI(card) {
        const cardElement = this.gameBoard.querySelector(`[data-id="${card.id}"]`);
        cardElement.className = `card${card.isFlipped ? ' flipped' : ''}`;
        cardElement.textContent = card.isFlipped ? card.value : '';
    }
    startGame() {
        const name = this.playerNameInput.value;
        if (this.validatePlayerName(name)) {
            this.playerName = name;
            this.displayName.textContent = this.playerName;
            this.nameError.style.display = 'none';
            this.loginScreen.classList.remove('active');
            this.gameScreen.classList.add('active');
            this.resetGame();
        }
        else {
            this.nameError.style.display = 'block';
        }
    }
    resetGame() {
        this.moves = 0;
        this.movesDisplay.textContent = '0';
        this.flippedCards = [];
        this.isLocked = false;
        this.initializeCards();
        this.createBoard();
    }
    cancelGame() {
        this.playerNameInput.value = '';
        this.nameError.style.display = 'none';
        this.gameScreen.classList.remove('active');
        this.loginScreen.classList.add('active');
    }
}
