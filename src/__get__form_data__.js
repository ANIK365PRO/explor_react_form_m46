/***
 * 1. e.target.[name of the input field].value
 *
 * 2. use form action and formData in the Action Form Handler,
 *    formData.get('name of the input field')
 *
 * 3. Controlled component, one per each field. use useState onChange on
 *    the field. useful to dynamically error handle.
 * 3. handle all controlled field on one state object
 *    const [formData, setFormData]= useState({
 *     name: "",
 *     password: "",
 *     phone: "",
 *   });
 *
 * 4. Uncontrolled component using--    useRef()          ****[react.dev]****
 */
