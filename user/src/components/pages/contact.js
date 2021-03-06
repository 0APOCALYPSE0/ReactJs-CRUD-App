import React from 'react';

const Contact = () => {
    return (
       <div className="container py-4">
           <h1>Contact Page</h1>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <textarea class="form-control" id="exampleDescription"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
       </div> 
    );
}

export default Contact;