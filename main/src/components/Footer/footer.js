import React from "react";
import '../styles/footer.css';

// On submitting the form, use a custom alert box to let the user know it was sent

export default function Footer() {

    return (
        <div class="container">
            <form action="">

                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.." />

                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your email.." />

                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Write something.." style={{height:"200px"}}></textarea>

                <input type="submit" value="Submit" />

            </form>
        </div>
    )
}