const Products = {
    crazy: {
        id: 1,
        name: "Crazy",
        price: 31000,
        amount: 0,
        img: "./images/burger_1.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    light: {
        id: 2,
        name: "Light",
        price: 26000,
        amount: 0,
        img: "./images/burger_2.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    cheeseburger: {
        id: 3,
        name: "CheeseBurger",
        price: 29000,
        amount: 0,
        img: "./images/burger_3.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    dburger: {
        id: 4,
        name: "dBurger",
        price: 29000,
        amount: 0,
        img: "./images/burger_4.png",
        get Summ() {
            return this.price * this.amount
        }
    },
}

const btns = document.querySelectorAll('.card__shop'),
    shop = document.querySelector('.shop'),
    basket = document.querySelector('.basket'),
    basketClose = document.querySelector('.basket__close'),
    shopItem = document.querySelector('.shop__item ');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        const parent = btn.closest('.card'),
            parentId = parent.getAttribute('id')
        Products[parentId].amount++
        basketInfo()
    })
})
function basketInfo() {
    const productsArr = []
    for (const key in Products) {
        const pk = Products[key]
        const span = document.querySelector(`#${key} .card__item`)
        if (pk.amount) {
            productsArr.push(pk)
            span.classList.add('active')
            span.innerHTML = pk.amount
        }
    }
    shopItem.classList.add('active')
    let allAmount = 0
    for (let i = 0; i < productsArr.length; i++) {
        allAmount += productsArr[i].amount
    }
    shopItem.innerHTML = allAmount
    shopItem.innerHTML >= 10 
    ? shopItem.style = `width:25px;height:25px` 
    : shopItem.style = `width:20px;height:20px`;
}

shop.onclick = () => {
    basket.classList.add('active')
}

basketClose.onclick = () => {
    basket.classList.remove('active')
}

// HW

const LevelSystem = {
    currentLevel: 0,
    maxLevel: 100,
    levelText: document.getElementById('levelText'),
    
    startLevelAnimation() {
        this.currentLevel = 0;
        this.animateLevelUp();
    },
    
    animateLevelUp() {
        if (this.currentLevel < this.maxLevel) {
            this.currentLevel++;
            this.updateDisplay();
            
            let speed = 200;
            if (this.currentLevel > 80) speed = 25;
            else if (this.currentLevel > 60) speed = 50;
            else if (this.currentLevel > 40) speed = 100;
            else if (this.currentLevel > 20) speed = 150;
            
            setTimeout(() => {
                this.animateLevelUp();
            }, speed);
        }
    },
    
    updateDisplay() {
        this.levelText.textContent = this.currentLevel + ' LVL';
        this.updateColor();
    },
    
    updateColor() {
        this.levelText.className = 'level-text';
        if (this.currentLevel >= 80) {
            this.levelText.classList.add('level-color-80');
        } else if (this.currentLevel >= 60) {
            this.levelText.classList.add('level-color-60');
        } else if (this.currentLevel >= 40) {
            this.levelText.classList.add('level-color-40');
        } else if (this.currentLevel >= 20) {
            this.levelText.classList.add('level-color-20');
        } else {
            this.levelText.classList.add('level-color-0');
        }
    }
};

LevelSystem.startLevelAnimation();
