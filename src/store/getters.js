const getters = {

    // 映射书本数据
    mapBooksData: (state) => {
        let bookObj = {};
        state.noteList.forEach(item => {
            if (bookObj[item.book.id]) {
                bookObj[item.book.id].push({
                    id: item.book.id,
                    name: item.book.name,
                    note: item
                });
            } else {
                bookObj[item.book.id] = [
                    {
                        id: item.book.id,
                        name: item.book.name,
                        note: item
                    }
                ];
            }
        });

        return bookObj;


    },
    getSelectedBook:(state)=>{
        return state.selectedBook;

    }

}

export default getters;