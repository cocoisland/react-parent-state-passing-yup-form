
## App component - demonstrate component properties and methods passing between components.
* contains App memberList state hook properties for list of memberList objects.
* contains App member state hook object for temporary object transfer from MemberList component to MemberForm component. 
* memberList objects are passed down to MemberList component to display.
* when an object from memberList is selected from MemberList component, the object is copied into App member state hook object, which is ready to be edit by clicking on the Edit button from MemberList component.
* new member created in MemberForm are submitted from MemberForm to be appended into App memberList state hook object lists.
* 

## MemberForm component
* used parent App state hook properties to manage component form elements.
* React form, input
* __Yup validation without Formik.__
* React state hook validation error warning.
* **Javascript Button disabled Submit **

## MemberList component
* demonstrate Material-Ui Grid, Card, CardHeader, CardContent, Typography.
* received list of memberList object from App component to display as material-ui cards.
* **Radio selected** button passed name of memberList object back to App component to be filtered for the actual object which then to be passed down to MemberForm component upon clicking **Edit** button.
