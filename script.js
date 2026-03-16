(function() {
    const state = {
        alpha: null,
        bravo: null,
        charlie: null
    };

    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    function generateCode() {
        const array = new Uint32Array(6);
        window.crypto.getRandomValues(array);
        let code = '';
        for (let i = 0; i < array.length; i++) {
            code += charset[array[i] % charset.length];
        }
        return code;
    }

    function updateUI() {
        const ids = ['alpha', 'bravo', 'charlie'];
        ids.forEach(id => {
            const display = document.getElementById(`display-${id}`);
            if (state[id]) {
                display.textContent = state[id];
                display.style.color = 'var(--dark)';
            }
        });

        if (state.alpha && state.bravo && state.charlie) {
            const combinedSection = document.getElementById('combined-section');
            const combinedDisplay = document.getElementById('combined-key');

            const key = state.alpha.substring(0, 2) +
                        state.bravo.substring(0, 2) +
                        state.charlie.substring(0, 2);

            combinedDisplay.textContent = key;
            combinedSection.classList.remove('hidden');
        }
    }

    function handleButtonClick(id) {
        state[id] = generateCode();
        updateUI();
    }

    document.getElementById('btn-alpha').addEventListener('click', () => handleButtonClick('alpha'));
    document.getElementById('btn-bravo').addEventListener('click', () => handleButtonClick('bravo'));
    document.getElementById('btn-charlie').addEventListener('click', () => handleButtonClick('charlie'));

})();
