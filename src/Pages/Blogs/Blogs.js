import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Difference between javascript and nodejs</h2>
            <h4>Javascript</h4>
            <p>1.Javascript is a programming language that is used for writing scripts on the website. <br />2.Javascript can only be run in the browsers. <br />3.It is basically used on the client-side. <br />4.Javascript is used in frontend development. <br /> 5.Some of the javascript frameworks are RamdaJS, TypedJS, etc.  </p>
            <h4>Nodejs</h4>
            <p>1.NodeJS is a Javascript runtime environment. <br />
                2.We can run Javascript outside the browser with the help of NodeJS. <br />3.It is mostly used on the server-side. <br />4.Nodejs does not have capability to add HTML tags. <br />5.Nodejs is used in server-side development. </p>
            <br /> <br />
            <h2>Differences between sql and nosql databases</h2>
            <p>1.SQL databases are relational, NoSQL databases are non-relational. <br />
               2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
               3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
               4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
               5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
        </div>
    );
};

export default Blogs;