
export default function Instructions (setFlag){

    return (
        <div className='centeredParagraphs'>
            Welcome to Budget Boy. We're here to help you keep from over spending! All we need is a little bit of info from you and we can get started on savings. <br/>
            Basically what we do is account for how much you would like to save per paycheck and give you a daily spending amount. By entering your paycheck for the week ..."please split you 2 week check manually for accurate results"... 
            you will receive and average of money per-day you can spend to save that amount. 
            you can also choose not to save any and we just provide you an amount per day that would be safe from overdraft. Just click below to get started. Good luck and happy savings <br/>
        <button onClick={() => setFlag("newUserForm")}>I'm Ready to Save!</button>
        </div>
    )
}
