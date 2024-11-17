document.addEventListener("DOMContentLoaded", () => {
    const otpInputs = document.querySelectorAll('.otp-inputs input');
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            } else if (input.value.length === 0 && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });

    document.getElementById('verifyBtn').addEventListener('click', () => {
        const otp = Array.from(otpInputs).map(input => input.value).join('');
        verifyOTP(otp);
        
    });

    function verifyOTP(otp) {
        // Simulate sending OTP to the server
        console.log(`Verifying OTP: ${otp}`);
        // You can replace the above line with an actual server request using fetch or XMLHttpRequest
        // Example:
        // fetch('/verify-otp', { method: 'POST', body: JSON.stringify({ otp }) })
        //     .then(response => response.json())
        //     .then(data => console.log(data));
    }
});
