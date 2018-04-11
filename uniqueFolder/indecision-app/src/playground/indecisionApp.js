console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

let count = 0;

const addOne = () => {
  count++;
  renderFormApp();
};

const removeAll = () => {
  app.options = [];
  count = 0;
  renderFormApp();
};

const onMakeDecision = () => {
  let randomNum = Math.floor(Math.random() * app.options.length);
  let option = app.options[randomNum];
  alert(option);
};

const onFormSubmit = e => {
  // prevent entire page from refreshing
  e.preventDefault();
  // get the value inside the form just submitted
  const option = e.target.elements.option.value;
  // if there's anything in the form push to array
  if (option) {
    app.options.push(option);
    // clear out don't know why
    e.target.elements.option.value = '';
    renderFormApp();
  }
};

const appRoot = document.getElementById('app');

const renderFormApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>

      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

      {app.subtitle && <p>{app.subtitle}</p>}
      <h4>Count: {count}</h4>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map(option => {
          return <p key={option}>{option}</p>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button onClick={addOne}>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot); // says render the jsx above (in template) and we want to
  // render inside the application root - the div we set up in index.html
};
renderFormApp();
