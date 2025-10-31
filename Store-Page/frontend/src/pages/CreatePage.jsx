const CreatePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-3xl p-12 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center p-2">
          <h1 className="text-2xl text-gray-900 dark:text-white">Luo uusi tuote</h1>
        </div>
        <div className="w-full border-t-2 border-t-gray-900 dark:border-t-gray-100 mt-4 pt-8">
          <form className="w-full flex flex-col gap-3.5 items-center space-y-4">
            <div className="w-full max-w-md flex flex-col text-start">
              <label htmlFor="name" className="mb-1">Nimi</label>
              <input
                type="text"
                id="name"
                required
                placeholder="lisää nimi"
                className="w-full border rounded p-2"
              />
            </div>
            <div className="w-full max-w-md flex flex-col text-start">
              <label htmlFor="price" className="mb-1">Hinta</label>
              <input
                type="number"
                id="price"
                required
                placeholder="lisää hinta"
                className="w-full border rounded p-2 focus:ring-2 focus:ring-gray-800"
              />
            </div>
            <div className="w-full max-w-md flex flex-col text-start">
              <label htmlFor="img" className="mb-1">Kuva Url</label>
              <input
                type="text"
                id="img"
                required
                placeholder="lisää kuvan url"
                className="w-full border rounded p-2 focus:ring-2 focus:ring-gray-800"
              />
            </div>
            <div className="w-full max-w-sm flex flex-col mt-5 text-start">
              <button
                type="submit"
                className="w-full border rounded p-2 bg-gray-800 text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-800"
              >
                Lisää tuote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
