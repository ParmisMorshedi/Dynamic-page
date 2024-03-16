export default function Contact(){
    return(
        <>
           
                <div id="container">
                    <p>
                    Thank you for considering my profile. I am actively seeking new
                    opportunities and am open to exciting challenges in my field. If you
                    believe my skills and experiences align with your organization's needs, I
                    would be thrilled to discuss potential collaborations. Feel free to reach
                    out through the contact details provided, and I will promptly respond. I
                    appreciate your time and consideration
                    </p>
                    <form>
                    <div className="name-part">
                        <label htmlFor="name">Name</label>
                        <input
                        name="query-name"
                        id="name"
                        type="text"
                        placeholder="enter your name"
                        required=""
                        />
                        <label htmlFor="lastname">LastName</label>
                        <input
                        name="query-lastname"
                        id="lastname"
                        type="text"
                        placeholder="enter your lastname"
                        required=""
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Telephone number</label>
                        <input
                        name="query-phone"
                        id="phone"
                        type="tel"
                        placeholder="wite your Telephone number"
                        required=""
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                        name="query-email"
                        id="email"
                        type="email"
                        placeholder="enter your email"
                        required=""
                        />
                    </div>
                    <div>
                        <label htmlFor="message">message</label>
                        <input
                        name="query-message"
                        id="message"
                        type="text"
                        placeholder="write your message"
                        required=""
                        />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    </form>
                </div>
            

        </>
    )
}