import FormTodo from '../components/FormTodo';
import Header from '../components/Header';
import './style.css'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="content">
        <FormTodo/>
      </div>
    </div>
  )
}

export default Home