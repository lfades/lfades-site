import FormInput from '../src/components/FormInput';

const Contact = () => (
  <div>
    <h2>This is not a public page 😞</h2>

    <form>
      <FormInput />
    </form>

    <style jsx>{`
      h2 {
        color: white;
        font-size: 3em;
        margin: 0;
      }
    `}</style>
  </div>
);

export default Contact;
