import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addsongs, removeSongs, removeAll } from "../store/songsSlice";


const Playlist = () => {
  const songsFromStore = useSelector(state => state.songs.list)
  const dispatch = useDispatch()
  const [songs, setSongs] = useState(["Take Five", "Claire de Lune"]);
  const [songTitle, setSongTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const title = songTitle.trim()
    if (title !== "") {
      // setSongs([...songs, title]);
      dispatch(addsongs(title));
      setSongTitle("");
    }
  }

  function handleRemove(songIndex) {
    // setSongs(songs.filter((song, i) => i !== songIndex));
    dispatch(removeSongs(songIndex))
  }

  function handleRemoveAll() {
    // setSongs([]);
    dispatch(removeAll())
  }

  return (
    <div className="container mt-2">

      <h3 className="text-center py-4">My Playlist</h3>

      <div className="row">

        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-4"
              value={songTitle}
              onChange={event => setSongTitle(event.target.value)}
            />
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-success">Add</button>
            </div>
          </form>
        </div>

        <div className="col-md-6">
          <ul className="list-group mt-5">
            {
              // songs.map((song, index) => (
                songsFromStore.map((song, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{song}</span>
                  <button className="btn btn-outline-danger" onClick={() => handleRemove(index)}>Remove</button>
                </li>
              ))
            }
          </ul>

          {
            // songs.length > 0 && <button className="btn btn-danger my-2" onClick={handleRemoveAll}>Remove All</button>
            songsFromStore.length > 0 && <button className="btn btn-danger my-2" onClick={handleRemoveAll}>Remove All</button>

          }
        </div>

      </div>

    </div>
  );
}

export default Playlist;