// TODO  Refactor the code so that it consists of 
// three new components: Header, Content, and Total.

// All data still resides in the App component, 
// which passes the necessary data to each component using props. 
// Header takes care of rendering the name of the course, 
// Content renders the parts and their number of exercises and 
// Total renders the total number of exercises.

const Header  = ({course}) => <h1>{course}</h1>

const Part = ({item}) => <p>{item.title} {item.value}</p>

const Content = ({content}) => (
    <>
      {content.map((item, index) => (<Part key={index} item={item}/>)
    )}
    </>
  )  


const Total = ({total}) => (<p>Number of exercises {total}</p>)


const App = () => {

  const course = 'Half Stack application development'
  const content = [
    {title: 'Fundamentals of React', value : 10},
    {title: 'Using props to pass data', value: 7},
    {title: 'State of a component' , value: 14}
  ]
  const total = content.reduce((sum, entry) => sum + entry.value, 0)

  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <Total total={total}/>
    </div>
  )
}

export default App