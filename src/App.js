
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import TodoModal from './components/TodoForm/TodoModal';
import TodoList from './components/TodoForm/TodoList';
import CategoryModal from './components/CategoryForm/CategoryModal'
import StatusModal from './components/CategoryForm/StatusModal'
import Buttons from './components/Buttons/Buttons';
import Filters from './components/Filters/SelectCategorynStatus';

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
  const [list, setList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [filtered, setFiltered] = useState()

  const uniqueIdGenerator = () => {
    return Math.floor(Math.random() * 100000 + 1);
  };
  var filteredList = useMemo(getFilteredList, [filtered, list]);

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
        statusList: [],
      },
    ])
  }

  //DELETE
  const handleDeleteItems = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    const newcatList = categoryList.filter((item) => item.id !== id)
    setCategoryList(newcatList)
  }

  const handleStDelete = (id) => {
    const newList = categoryList.map((i) => {
      i.statusList = i.statusList.filter((item) => item.id !== id)
      return i
    })
    setCategoryList(newList)
  }

  //FILTER
  function getFilteredList() {
    if (!filtered) {
      return list;
    }
    return list.filter((item) => item.category === filtered || item.statusList === filtered);
  }

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
          defaultValue=""
          categoryList={categoryList}
          handleDeleteItems={handleDeleteItems}
          handleAddCategory={handleAddCategory}
          categoryModalOpen={categoryModalOpen}
          setCategoryModalOpen={setCategoryModalOpen}

        />

        <StatusModal
          handleStDelete={handleStDelete}
          setCategoryList={setCategoryList}
          categoryList={categoryList}
          statusModalOpen={statusModalOpen}
          setStatusModalOpen={setStatusModalOpen}
        />

        <div className='addButtons'>

          <Buttons
            setModalOpen={setModalOpen}
            setCategoryModalOpen={setCategoryModalOpen}
            setStatusModalOpen={setStatusModalOpen}
          />

          <Filters
            categoryList={categoryList}
            setFiltered={setFiltered}
          />

        </div>

        <TodoList
          handleDeleteItems={handleDeleteItems}
          setList={setList}
          list={list}
          filteredList={filteredList}
        />
      </div>
    </>
  );
}

export default App;
