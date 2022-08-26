export default function Home(parentSelector) {
    if (!Home.instance) {
      this.parentSelector = parentSelector;
      this.parentElement = document.querySelector(parentSelector);
      this.toString = function () {
        return `
        <section>
        <h2>{ Doable } ø</h2>
            <div>
                <label>Sort</label>
                <select name="sort">
                    <option>Alphabetical (a-z)</option>
                    <option>Due date</option>
                    <option>Importance</option>
                </select>
            </div> <br>
            <div>
                <label>Show</label>
                <input type="checkbox"><label>Only pending</label>
                <input type="checkbox"><label>Only important</label>
            </div><br>
            <div>
                <input type="checkbox"><label>Help my mom </label><br><br>
                <input type="checkbox"><label>Make my bed</label><br><br>
                <input type="checkbox"><label>Write LinkedIn heading</label>
            </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <div>
                <input type="text" placeholder="do the dishes..."/><br>
                <input type="date" placeholder="do the dishes..."/><br>
                <button>Add Task</button>
            </div>
        </section>  
        `;
      };
      Home.instance = this;
    }
    return Home.instance;
  }

  Home.prototype.render = function () {
    this.parentElement.innerHTML = this;
  };