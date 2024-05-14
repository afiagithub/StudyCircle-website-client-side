# Website Name
afia-b9a11-online-group-study-website

# Live Site URL
https://study-circle-auth.web.app/

# Assignment_ID: 
assignment_category_0001

# Features
* **Home** page contains a banner, shows 6 assignment information dynamically, shows features of the website and lastly shows faqs.
<br>

* By clicking on the view details button of a assignment card, we are taken to another page containing that assignment's details (title, image, subject, mark, difficulty, due date of the task, description, assignment creator's name and image etc.)
<br>

* **About** page provides a brief description about the purpose and workings of StudyCircle online group study website and contains faqs.
<br>

* **Assignments** shows all the assignments as cards and each card has a *View Detail* button that redirects to the specific assignment details. It also has an *update* and a *delete* button. Only the creator can delete their own assignment but everyone can update all assignment data.
<br>

* **Create Assignment** is a private(route) page. This page contain a form to add an assignment. We can provide necessary information in the form and add that assignment to database and also the assignment will be shown in **Assignments** page.
<br>

* **Posted Assignment** is a private(route) page. This page shows the assignments that you have created. There are an *update* and a *delete* button. *update* button redirects you to a page for updating the assignment data.
<br>

* **Pending Assignment** is a private(route) page. This page shows the assignments that you have created which are also submitted by others. Only the submitted assignments that you have not marked will show on this page. It shows the submitter information and assignment related data. There is a *Give Mark* button that redirects you to a page to give mark on that submission.
<br>

* **Attempted Assignment** is a private(route) page. This page shows the assignments that you have submitted. It shows the status of the submission (completed/pending) and assignment related data. There will also be a preview of the file that you have submitted using iframe.
<br>

* **Update Assignment** is a private(route) page. This page contain a form to update an assignment. We can change information in the form and update that assignment's information in database and also the assignment's updated information will be shown in **Assignments** page.
<br>

* **Submit Assignment** is a private(route) page. This page contain a form to submit an assignment's work. The submitter can provide the URL link of the assignment file and give short note.
<br>

* **Mark Assignment** is a private(route) page. This page contain a form to mark an assignment submission. We can check the file URL and see the short notes in the form and give mark and feedback to submitter through this form.
After giving mark on a submission, the status of the submission will change from 'pending' to 'completed'
<br>

# Characteristics
* Navigation Bar is fixed across all the pages of the website
<br>

* In the Navigation Bar, when a user is logged in, that user's name, image, posted, attempted, pending assignment and a logout button is shown. Also *Create Assignment* option is shown after signing in. Otherwise, Login & Register button is shown
<br>

* If an user tries to access a private route without logging in, the user is taken to the **sign in** page and after loggin in, the user is redirected to the intended page
<br>

* Footer section is fixed across all the pages of the website
<br>

* Relevant animations are added on several section of the website using *React Awesome reveal*
<br>

* **Toast** is shown with appropriate message for all the actions and conditions (like register, login, errors, successfull addition and update of assignment information etc.)
<br>


# Used npm packages -
* React Awesome reveal,
* React-tooltip
* React helmet async

