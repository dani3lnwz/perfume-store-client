import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
             <h2 className='text-center'>Difference between javascript and nodejs</h2>
        <h4 className='text-center'>Javascript</h4>
        <p className='text-center'>1.Javascript is a programming language that is used for writing scripts on the website. <br />2.Javascript can only be run in the browsers. <br />3.It is basically used on the client-side. <br />4.Javascript is used in frontend development. <br /> 5.Some of the javascript frameworks are RamdaJS, TypedJS, etc.  </p>
        <h4 className='text-center'>Nodejs</h4>
        <p className='text-center'>1.NodeJS is a Javascript runtime environment. <br />
            2.We can run Javascript outside the browser with the help of NodeJS. <br />3.It is mostly used on the server-side. <br />4.Nodejs does not have capability to add HTML tags. <br />5.Nodejs is used in server-side development. </p>
        <br /> <br />
        <h2 className='text-center'>Differences between sql and nosql databases</h2>
        <p>1.SQL databases are relational, NoSQL databases are non-relational. <br />
           2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
           3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
           4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
           5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
           <br /> <br />
           <h2 className='text-center'>What is the purpose of jwt and how does it work?</h2>
           <p>The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
            Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
            <h2 className='text-center'>When should you use nodejs and when should you use mongodb!</h2>
            <p>we should use node js When we need to send updates to the user in real-time.Because When we use Node.js, the server has no need of maintaining separate threads for each open connection.
            When we need require less management. When we need automatic repair, easier data distribution, and simpler data models make administration.</p>
        </div>
    );
};

export default Blogs;