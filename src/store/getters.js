const getters = {

    // 映射书本数据
    mapBooksData: (state) => {
        let bookObj = {};
        state.noteList.forEach(item => {
            if (bookObj[item.book.id]) {
                bookObj[item.book.id].push(item);

            } else {
                bookObj[item.book.id] = [];

            }

        });

        return bookObj;


    }

}

export default getters;