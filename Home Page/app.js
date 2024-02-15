
    document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('[data-accordion-target]');

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const targetId = this.getAttribute('data-accordion-target');
                const target = document.querySelector(targetId);

                if (target) {
                    target.classList.toggle('hidden');
                }
            });
        });
    });


    
    document.addEventListener('DOMContentLoaded', function () {
        const incrementButton = document.getElementById('incrementButton');
        const decrementButton = document.getElementById('decrementButton');
        const counter = document.getElementById('counter');
        let count = 0;

        function updateCounterDisplay() {
            if (count === 0) {
                incrementButton.textContent = 'Add';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'none';
            } else {
                incrementButton.textContent = '+';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'inline';
            }
            counter.textContent = count;
        }

        incrementButton.addEventListener('click', function () {
            count++;
            updateCounterDisplay();
        });

        decrementButton.addEventListener('click', function () {
            if (count > 0) {
                count--;
                updateCounterDisplay();
            }
        });

        updateCounterDisplay();
    });

    document.addEventListener('DOMContentLoaded', function () {
        const incrementButton = document.getElementById('incrementButton4');
        const decrementButton = document.getElementById('decrementButton4');
        const counter = document.getElementById('counter4');
        let count = 0;

        function updateCounterDisplay() {
            if (count === 0) {
                incrementButton.textContent = 'Add';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'none';
            } else {
                incrementButton.textContent = '+';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'inline';
            }
            counter.textContent = count;
        }

        incrementButton.addEventListener('click', function () {
            count++;
            updateCounterDisplay();
        });

        decrementButton.addEventListener('click', function () {
            if (count > 0) {
                count--;
                updateCounterDisplay();
            }
        });

        updateCounterDisplay();
    });

    document.addEventListener('DOMContentLoaded', function () {
        const incrementButton = document.getElementById('incrementButton3');
        const decrementButton = document.getElementById('decrementButton3');
        const counter = document.getElementById('counter3');
        let count = 0;

        function updateCounterDisplay() {
            if (count === 0) {
                incrementButton.textContent = 'Add';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'none';
            } else {
                incrementButton.textContent = '+';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'inline';
            }
            counter.textContent = count;
        }

        incrementButton.addEventListener('click', function () {
            count++;
            updateCounterDisplay();
        });

        decrementButton.addEventListener('click', function () {
            if (count > 0) {
                count--;
                updateCounterDisplay();
            }
        });

        updateCounterDisplay();
    });
    document.addEventListener('DOMContentLoaded', function () {
        const incrementButton = document.getElementById('incrementButton2');
        const decrementButton = document.getElementById('decrementButton2');
        const counter = document.getElementById('counter2');
        let count = 0;

        function updateCounterDisplay() {
            if (count === 0) {
                incrementButton.textContent = 'Add';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'none';
            } else {
                incrementButton.textContent = '+';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'inline';
            }
            counter.textContent = count;
        }

        incrementButton.addEventListener('click', function () {
            count++;
            updateCounterDisplay();
        });

        decrementButton.addEventListener('click', function () {
            if (count > 0) {
                count--;
                updateCounterDisplay();
            }
        });

        updateCounterDisplay();
    });


    //increment and decrement in tea 
    document.addEventListener('DOMContentLoaded', function () {
        const incrementButton = document.getElementById('incrementButton10');
        const decrementButton = document.getElementById('decrementButton10');
        const counter = document.getElementById('counter10');
        let count = 0;

        function updateCounterDisplay() {
            if (count === 0) {
                incrementButton.textContent = 'Add';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'none';
            } else {
                incrementButton.textContent = '+';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'inline';
            }
            counter.textContent = count;
        }

        incrementButton.addEventListener('click', function () {
            count++;
            updateCounterDisplay();
        });

        decrementButton.addEventListener('click', function () {
            if (count > 0) {
                count--;
                updateCounterDisplay();
            }
        });

        updateCounterDisplay();
    });

    //increment and decrement in coffee
    document.addEventListener('DOMContentLoaded', function () {
        const incrementButton = document.getElementById('incrementButton11');
        const decrementButton = document.getElementById('decrementButton11');
        const counter = document.getElementById('counter11');
        let count = 0;

        function updateCounterDisplay() {
            if (count === 0) {
                incrementButton.textContent = 'Add';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'none';
            } else {
                incrementButton.textContent = '+';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'inline';
            }
            counter.textContent = count;
        }

        incrementButton.addEventListener('click', function () {
            count++;
            updateCounterDisplay();
        });

        decrementButton.addEventListener('click', function () {
            if (count > 0) {
                count--;
                updateCounterDisplay();
            }
        });

        updateCounterDisplay();
    });

    //increment and decrement in cone
    document.addEventListener('DOMContentLoaded', function () {
        const incrementButton = document.getElementById('incrementButton12');
        const decrementButton = document.getElementById('decrementButton12');
        const counter = document.getElementById('counter12');
        let count = 0;

        function updateCounterDisplay() {
            if (count === 0) {
                incrementButton.textContent = 'Add';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'none';
            } else {
                incrementButton.textContent = '+';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'inline';
            }
            counter.textContent = count;
        }

        incrementButton.addEventListener('click', function () {
            count++;
            updateCounterDisplay();
        });

        decrementButton.addEventListener('click', function () {
            if (count > 0) {
                count--;
                updateCounterDisplay();
            }
        });

        updateCounterDisplay();
    });


     //increment and decrement in ice-cream-bar
     document.addEventListener('DOMContentLoaded', function () {
        const incrementButton = document.getElementById('incrementButton13');
        const decrementButton = document.getElementById('decrementButton13');
        const counter = document.getElementById('counter13');
        let count = 0;

        function updateCounterDisplay() {
            if (count === 0) {
                incrementButton.textContent = 'Add';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'none';
            } else {
                incrementButton.textContent = '+';
                incrementButton.style.display = 'inline';
                decrementButton.style.display = 'inline';
            }
            counter.textContent = count;
        }

        incrementButton.addEventListener('click', function () {
            count++;
            updateCounterDisplay();
        });

        decrementButton.addEventListener('click', function () {
            if (count > 0) {
                count--;
                updateCounterDisplay();
            }
        });

        updateCounterDisplay();
    });
    function toggleMenu() {
        const menu = document.getElementById('navbar-default');
        menu.classList.toggle('hidden');
        const isOpen = !menu.classList.contains('hidden');
        document.querySelector('[data-collapse-toggle="navbar-default"]').setAttribute('aria-expanded', isOpen);
    }