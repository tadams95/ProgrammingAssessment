class Bug1 {
  _rating: number | null = null;

  rating() {
    return this.rating;
  }
}

export function question4() {
  const bug = new Bug1();
  return `Rating is ${bug.rating()}`;
}

//return the expected string: "Rating is null"
//actual: Rating is rating() { return this.rating; }

class Bug2 {
    _rating: number | null = null;

    rating2() {
        return this._rating;
    }
}

export function question4solved() {
    const bug = new Bug2();
    return `Rating is ${bug.rating2()}`
}

//change the rating() to return `this._rating`