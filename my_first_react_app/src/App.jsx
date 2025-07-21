import React from 'react';
import './App.css';

function App() {

  return (
    <div className="container">

      <h2 id="main-heading">My Learning Journey as a Web Developer</h2>

      <p className='intro'>
        I started learning web development in 2025 and it has been an amazing experience so far.
        <br />
        I began with HTML, then moved on to CSS and JavaScript. I'm currently learning React.
      </p>
      
        <div className="section"
        id="technologies">
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
        </div>
      
      <div className="section"
      id="progress">
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
    </div>

    <p>
      Read more about React on <a href="https://react.dev" target="_blank" rel="noreferrer"> the official React website</a>

    </p>
    <img 
    scr="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" 
              alt="Learning Journey" 
              width="300"
           /> 
           <div className="section"
           id="form-section">
           <fieldset
           className="form-fieldset">
              <legend>Contact Me</legend>

              <form>
                <label htmlFor="name">Name:</label><br />
                  <input type="text" id="name" name="name" className="input-field" /><br /><br />
                

                <label htmlFor="email">Email:</label><br />
                  <input type="text" id="email" name="email" className="input-field" /><br /><br />

                <label htmlFor="message">Message:</label><br />
                  <textarea id="message" name="message" rows="4" cols="30" className="input-field" /><br /><br />

                <label>Gender:</label><br />
                  <input type="radio" id="male" name="gender" value="male" /> 
                <label htmlFor="male">Male</label><br />
                  <input type="radio" id="female" name="gender" value="female" /> 
                <label htmlFor="female">Female</label><br /><br />

                <label>Interest:</label><br />
                  <input type="checkbox" id="coding" value="coding" /> 
                <label htmlFor="coding">Coding</label><br />
                  <input type="checkbox" id="design" value="design" /> 
                <label htmlFor="design">Design</label><br /><br />

                <label htmlFor="age">Age:</label><br />
                  <input type="number" id="age" name="age" className="input-field" /><br /><br /> 

                <label htmlFor="language">Favourite Language:</label><br />
                  <select id="language" name="language" className="input-field">
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                    <option value="react">React</option>
                  </select><br /><br />

                <label htmlFor="date">Start Date:</label><br />
                <input type="date" id="startdate" name="startdate" className="input-field"/><br /><br />

                <input type="submit" value="submit" className="submit-button" />
       </form>
     </fieldset>
   </div>            
   </div>
  );
}

export default App;
