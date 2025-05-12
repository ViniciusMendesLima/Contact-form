function getMessage(messageSent){
    messageSent.style.opacity = "1";
        setTimeout(() => {
            messageSent.style.opacity = "0";
        }, 3000);

        if (window.innerWidth < 430) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
}

export{getMessage}