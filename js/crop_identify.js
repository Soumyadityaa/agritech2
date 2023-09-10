document.addEventListener('DOMContentLoaded', function () {
    const imageUpload = document.getElementById('image-upload');
    const diagnoseButton = document.getElementById('diagnose-button');
    const diagnosisResult = document.getElementById('diagnosis-result');
    const getExpertAdviceButton = document.getElementById('get-expert-advice');

    diagnoseButton.addEventListener('click', function () {
        // Simulate image recognition and diagnosis
        const randomDisease = ['Leaf Spot', 'Powdery Mildew', 'Rust', 'Aphids'];
        const randomDiagnosis = randomDisease[Math.floor(Math.random() * randomDisease.length)];

        diagnosisResult.textContent = `Diagnosis: ${randomDiagnosis}`;
    });

    getExpertAdviceButton.addEventListener('click', function () {
        // Simulate getting expert advice
        alert('Expert advice: Spray neem oil to control Aphids.');
    });
});
