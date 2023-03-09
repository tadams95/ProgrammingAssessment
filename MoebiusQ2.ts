//write classes that implements the following interfaces, assuming that all methods are used with approximately the same frequency.

interface Item {
  id: string;
  tag: string;
}

interface ItemStore {
  // Add an {Item} to the store, replacing any existing item with the same Item#id value
  put: (item: Item) => void;

  //retrieves the {Item} with the given {Item#id} value, or null if no such {Item} exists in the store
  get: (id: string) => Item | null;

  //Delete all {Item}s with the specified tag.
  dropAllByTag: (tag: string) => void;

  //Returns the number of Items in the store
  size: () => number;
}

class ItemStoreImplementation implements ItemStore {
    private items: Map<string, Item>;

    //use a map data structure to store all items with the "id" as a key
    constructor() {
      this.items = new Map<string, Item>();
    }
  
    //method to put items into the map the "id" as a key and overwrites any item that already has that "id"
    put(item: Item): void {
      this.items.set(item.id, item);
    }
  
    //this method returns any item that has that particular id string, if that id doesn't exists it returns null
    get(id: string): Item | null {
      return this.items.get(id) || null;
    }
  
    //this method iterates over all the item entries and deletes the item with id where the item.tag matches the inputted tag
    dropAllByTag(tag: string): void {
      for (const [id, item] of this.items.entries()) {
        if (item.tag === tag) {
          this.items.delete(id);
        }
      }
    }
  
    //returns items with a size inputted as a number
    size(): number {
      return this.items.size;
    }
  }
  