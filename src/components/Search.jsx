
const Search = ({Search, setSearch}) => {
  return ( 
    <div className="search">
        <h2> Pesquisar tarefas: </h2> 
        <input type="text" value={Search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar uma tarefa..." />
        </div>
)
}

export default Search;