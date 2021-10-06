import react from 'react';


const Search =({handleSearchnote})=>{
    return  (<div className="search">
            <div class="row">
                
            <div className="search2">
            <div class="col-xs-2"> <button class="btn ">
                <i class="fas fa-search"></i>
            </button>   </div>
            <div class="col-xs-8"><input onChange={(event)=> handleSearchnote(event.target.value)}
            type="text " placeholder='Search your notes here ya'/></div>
            </div>
            </div>

            </div>
    )

};

export default Search;