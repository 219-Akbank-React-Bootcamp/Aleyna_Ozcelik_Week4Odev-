
import { useState } from 'react';
import './App.css';
import TodoModal from './components/TodoForm/TodoModal';
import TodoList from './components/TodoForm/todoList';
import CategoryModal from './components/CategoryForm/CategoryModal'
import StatusModal from './components/CategoryForm/StatusModal'
import DeleteCategory from './components/CategoryForm/DeleteCategory'
import Buttons from './components/Buttons/Buttons';
import Filters from './components/Filters/SelectCategorynStatus';
import DeleteStatus from './components/CategoryForm/DeleteStatus';



function App() {
  // const listOfCategory = [
  //   {
  //     id: 1,
  //     title: 'eğitim',
  //     statusList: [
  //       {
  //         id: 1,
  //         color: "purple",
  //         text: 'ders saati belirlendi',

  //       },
  //       {
  //         id: 2,
  //         color: "purple",
  //         text: 'ders başladı'
  //       },
  //       {
  //         id: 3,
  //         color: "purple",
  //         text: 'dersteyiz'
  //       },
  //       {
  //         id: 4,
  //         color: "purple",
  //         text: 'ders bitti ödevverildi'
  //       },
  //       {
  //         id: 5,
  //         color: "purple",
  //         text: 'ödevler kontrol edildi'
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: 'ev işleri',
  //     statusList: [{
  //       id: 19,
  //       color: "red",
  //       text: 'temizlik saati belirlendi'
  //     },
  //     {
  //       id: 20,
  //       color: "blue",
  //       text: 'temizlik başladı'
  //     },
  //     {
  //       id: 21,
  //       color: "yellow",
  //       text: 'temizliyoruz'
  //     },
  //     {
  //       id: 22,
  //       color: "aqua",
  //       text: 'temizlik bitti'
  //     },

  //     ],


  //   }

  // ]
  const [list, setList] = useState([])
  const [categoryList, setCategoryList] = useState([]);
  // const [statusList, setStatusList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [catDeleteModalOpen, setCatDeleteModalOpen] = useState(false);
  const [stDeleteModalOpen, setStDeleteModalOpen] = useState(false);

  const uniqueIdGenerator = () => {
    return Math.floor(Math.random() * 100000 + 1);
  };


  //ADD 
  const handleAddTodo = ({ title, desc, category, statusList }) => {
    setList((prev) => [
      ...prev,
      {
        id: uniqueIdGenerator(),
        title,
        desc,
        category,
        statusList,

      },
    ])

  }
  const handleAddCategory = ({ title }) => {
    setCategoryList((prev) => [
      ...prev,
      {
        id: uniqueIdGenerator(),
        title,
        statusList:[],

      },
    ])
  }
  
  //DELETE
  const handleDeleteItems = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    const newcatList = categoryList.filter((item) => item.id !== id);
    setCategoryList(newcatList)
  }
  const handleStDeleteItems = (id) => {


    const newcatList = categoryList.map((it)=>
    it.statusList.filter((st)=>st.id !== id)
    
    )
    

    // setStatusList(newcatList)
  }
console.log(categoryList)

  return (
    <>
      <div className="container">

        <h1>TODO LIST</h1>
        <TodoModal
          defaultValue=""
          categoryList={categoryList}
          handleAddTodo={handleAddTodo}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
        <CategoryModal
          categoryList={categoryList}
          defaultValue=""
          handleAddCategory={handleAddCategory}
          categoryModalOpen={categoryModalOpen}
          setCategoryModalOpen={setCategoryModalOpen}
          setCatDeleteModalOpen={setCatDeleteModalOpen}
        />
        <StatusModal
          setCategoryList={setCategoryList}
          categoryList={categoryList}
          statusModalOpen={statusModalOpen}
          setStatusModalOpen={setStatusModalOpen}
          uniqueIdGenerator={uniqueIdGenerator}
          setStDeleteModalOpen={setStDeleteModalOpen}

        />
        <DeleteCategory
          catDeleteModalOpen={catDeleteModalOpen}
          setCatDeleteModalOpen={setCatDeleteModalOpen}
          categoryList={categoryList}
          handleDeleteItems={handleDeleteItems}
        />
        <DeleteStatus
          stDeleteModalOpen={stDeleteModalOpen}
          setStDeleteModalOpen={setStDeleteModalOpen}
          categoryList={categoryList}
          handleStDeleteItems={handleStDeleteItems}
        />
        <div className='addButtons'>
          <Buttons
            setModalOpen={setModalOpen}
            setCategoryModalOpen={setCategoryModalOpen}
            setStatusModalOpen={setStatusModalOpen}
          />
          <Filters
            categoryList={categoryList}
            setCategoryList={setCategoryList}
          />
        </div>
        <TodoList
          handleDeleteItems={handleDeleteItems}
          setList={setList}
          list={list}
        />

      </div>
    </>
  );
}

export default App;
