import * as yup from 'yup';
 const schema =() => yup.object({
    title: yup.string().required('Title is required.'),
    description: yup.string(),
    deadline: yup.string().required('Deadline is required.'),
});
export default schema;