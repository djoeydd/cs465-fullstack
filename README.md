# cs465-fullstack
CS-465 Full Stack Development with MEAN


**Compare and contrast the types of frontend development you used in your full-stack project, including Express, HTML, JavaScript, and the single-page application (SPA):**
I used Express, HTML, and JavaScript to serve pages. With Express and JavaScript, I set up routes and controllers to handle client requests. Express would either retrieve a static HTML page or use Handlebars templates, dynamically populating them with data from the database. These tools worked together to handle server requests and deliver results to the frontend.

In Angular the entire single-page application (SPA) was sent to the client. After that initial load, all page rendering and execution happened in the browser on the client side, needing backend calls only for data. Express on the other hand required multiple server calls every time a page was loaded or refreshed. SPAs have a longer initial load, but once loaded, navigating between pages doesn't require additional server calls.

**Why did the backend use a NoSQL MongoDB database?**
MongoDB was chosen for its scalability and fast querying capabilities. Its document structure is similar to JSON, making it a natural fit for frontend applications where JSON is often the data format used for exchanges between client and server.

**How is JSON different from JavaScript, and how does it connect the frontend and backend development?**
JSON is a data format used to structure information, while JavaScript is a programming language. JSON allows for easy data transfer between the frontend and backend, especially through APIs. RESTful APIs utilize JSON for data requests and responses, enabling seamless integration of frontend and backend components.

**Provide examples of code refactoring in the full stack project and the benefits of reusable UI components:**
I improved functionality by replacing static HTML pages with Handlebars templates. This change allowed the page structure to be reused while customizing the displayed content. Additionally, moving data out of static JSON files into MongoDB enabled content updates without redeploying code, enhancing flexibility and efficiency.

**Explain your understanding of methods, endpoints, and security in a full stack application:**
HTTP methods (like GET, POST, PUT, and DELETE) define client-server interactions. API endpoints are the access points for these interactions. In this application, security included user authentication and JWTs, enabling access control to certain endpoints based on user identity.

**How has this course helped you reach your professional goals?**
This course expanded my full stack development knowledge and introduced me to new technologies such as Express and Node.js. Working on a full stack application from scratch allowed me to understand how different parts of the application connect together. This is something I had not thought of prior to this course.

**What skills have you learned, developed, or mastered in this course to make you more marketable?**
I did not have much experience with javascript outside of some basic personal projects. Express was also completly new to me. Since starting this class I have been succesfully working on and deprloying other full-stack applications.
