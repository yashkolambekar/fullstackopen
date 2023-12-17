const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => {
  
  const total = parts.reduce((partTotal, part) => {
      return partTotal + part.exercises;
    }, 0)

  return (
    <>
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    </>
  );
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  const partsArray = parts.map((part) => (
    <Part key={part.name + Math.random()} part={part} />
  ));
  return <>{partsArray}</>;
};

const Course = (props) => {
  const course = props.course.name;
  const parts = props.course.parts;
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default Course;