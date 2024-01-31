import { sendData } from "./API";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CreateContact = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: sendData,
    onSuccess: (newContact) => {
      queryClient.setQueryData(["contact", newContact.id], newContact);
    },
  });

  const addNewContact = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    try {
      mutate({ name, number });
      event.target.reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={addNewContact}>
      <h4>Name</h4>
      <input name="name" />
      <h4>Number</h4>
      <input name="number" />
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
};
export default CreateContact;
