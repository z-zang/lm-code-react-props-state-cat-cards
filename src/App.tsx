import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import CatCard from './components/cat_card';
import Cat from './data/cat'
import { ChangeEvent, useState } from 'react';
import { catsData } from './data/cat-data';
import { dogsData } from './data/dog-data';
import Dog from './data/dog';
import { v4 as uuidv4 } from 'uuid';


function App(): JSX.Element {
    const [cats, setCats] = useState<Cat[]>(catsData)
    const [dogs, setDogs] = useState<Dog[]>(dogsData)

    const [newName, setNewName] = useState<string>('');
    const [species, setSpecies] = useState<string>('');
    const [birthYear, setBirthYear] = useState<number>(0);
    const [favFoods, setFavFoods] = useState<string>('');
    const [error, setError] = useState(false)

    const catCount = cats.length
    const dogCount = dogs.length

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const fieldName = e.target.name

        switch (fieldName) {
            case 'name':
                setNewName(value)
                break;
            case 'species':
                setSpecies(value)
                break;
            case 'birthYear':
                setBirthYear(Number(value))
                break;
            case 'favFoods':
                setFavFoods(value)
                break;
        }

    }
    const handleAddCat = () => {
        if (newName && species && favFoods && birthYear !== 0) {
            setError(false)
            const newCat = {
                id: uuidv4(),
                name: newName,
                species: species,
                favFoods: [favFoods],
                birthYear: birthYear,
            }
            setCats([...cats, newCat])
            setNewName('')
            setSpecies('')
            setFavFoods('')
            setBirthYear(0)
        } else {
            setError(true)
        }

    }

    return (
        <>
            <Navbar />
            <Header catCount={catCount} dogCount={dogCount} />

            <main>
                <div className='addNewCatContainer' onChange={(e) => handleInputChange(e as ChangeEvent<HTMLInputElement>)}>
                    <h2 className='addNewCatTitle'>Add new cat:</h2>
                    <div className='addNewCat'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={newName} />
                        <label htmlFor="species">Species</label>
                        <input type="text" name='species' value={species} />
                        <label htmlFor="birthYear">Birth Year</label>
                        <input type="number" name="birthYear" value={birthYear} />
                        <label htmlFor="favFoods">Fave Foods</label>
                        <input type="text" name="favFoods" value={favFoods} />
                    </div>
                    {error && (
                        <div className='addCat__error'>Error: Some fields haven't been filled in!</div>
                    )}

                    <button className='addCatButton' onClick={handleAddCat}>Add new Cat</button>

                </div>

                <div className='cards__wrapper'>
                    {cats.map((cat, index) =>
                        <CatCard
                            key={cat.id}
                            name={cat.name}
                            species={cat.species}
                            favFoods={cat.favFoods}
                            birthYear={cat.birthYear}
                            catIndex={index}
                        />
                    )}
                    {dogs.map((cat, index) =>
                        <CatCard
                            key={cat.id}
                            name={cat.name}
                            species={cat.species}
                            favFoods={cat.favFoods}
                            birthYear={cat.birthYear}
                            catIndex={index}
                        />
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}

export default App;
