

function App() {

  return (
    <div>
      <h2>My Learning Journey as a Web Developer</h2>

      <p>I started learning web development in 2025 and it has been an amazing experience so far.
        <br />
        I began with HTML, then moved on to CSS and JavaScript. I'm currently learning React.
      </p>
      
      
        <h2>Technologies I have Learned</h2>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ol>

        <h2>Topics I Enjoy Most</h2>
        <ul>
          <li>Designing Layouts</li>
          <li>Responsive Web Design</li>
          <li>Building Interactive Forms</li>
        </ul>
      
    <table border="1">
      <thead>
        <tr>
          <th>Technology</th>
          <th>Learning Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>HTML</td>
          <td>Completed</td>
        </tr>
        <tr>
          <td>CSS</td>
          <td>Completed</td>
        </tr>
        <tr>
          <td>JavaScript</td>
          <td>In Progress</td>
        </tr>
        <tr>
          <td>React</td>
          <td>In Progress</td>
        </tr>
      </tbody>
    </table>

    <p>
      Read more about React on <a href="https://react.dev" target="_blank" rel="noreferrer"> the official Reacr website</a>

    </p>
    <img 
    scr="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" 
              alt="Learning Journey" 
              width="300"
           /> 

           <fieldset>
              <legend>Contact Me</legend>

              <form>
                <label>
                  Name:
                  <input type="text" name="name" />
                </label>
                <br />

                <label>
                  Email:
                  <input type="text" name="email" />
                </label>
                <br />

                <label>
                  Message:
                  <br />
                  <textarea name="message" rows="4" cols="30" />
                </label>
                <br />

                <label>
                  Gender:
                  <input type="radio" name="gender" value="male" /> Male 
                  <input type="radio" name="gender" value="female" /> Female
                </label>
                <br />

                <label>
                  Interest: 
                  <input type="checkbox" value="coding" /> Coding
                  <input type="checkbox" value="design" /> Design
                </label>
                <br />

                <label>
                  Age:
                  <input type="number" name="age" />
                </label>
                <br />

                <label>
                  Favourite Language:
                  <select name="language">
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                    <option value="react">React</option>
                  </select>
                </label>
                <br />

                <label>
                  Start Date:
                <input type="date" name="startdate"/>
                </label>
                <br />

                <input type="submit" value="submit" />
       </form>
     </fieldset>            
   </div>
  );
}

export default App
