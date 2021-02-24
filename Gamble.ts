import {Observable, race, Subscriber} from "rxjs";
import axios from "axios";

const checkpoints: string[] = [
    "http://google.com",
    "http://github.com",
    "http://takealot.com",
    "http://netflix.com",
    "http://npmjs.com"
]
let completed = false;

function gamble(contestantCount: number, checkpoints: string[]): void {
    console.log("Welcome to ObservableGambling!");
    console.log("Today's contestants will need to reach the following checkpoints:");
    for (const checkpoint of checkpoints) {
        console.log(` - ${checkpoint}`);
    }


    console.log(`\nGathering all ${contestantCount} contestants...`)

    const contestants: Observable<number>[] = [];
    for (let i = 0; i < contestantCount; i++) {
        contestants.push(createContestant(i+1));
    }


    console.log(`Contestants gathered. Let the race begin!\n`)
    const source: Observable<number> = race(contestants);

    source.subscribe(
        x => console.log(`\nObservable #${x} won the race!`),
        e => console.error(`\nI guess the track was wet since someone slipped...\nThe contestant yelled: ${e}`),
        () => console.log("I hope you enjoyed the race. That's all folks!")
    );
}

function createContestant(i: number): Observable<number> {
    return new Observable((observer) => {
            createRace(i, observer)
                .then(() => {
                    observer.next(i);
                    observer.complete();
                })
                .catch(e => observer.error(e))
        });
}

async function createRace(constestantId: number, observer: Subscriber<number>) {
    try {
        for (const url of checkpoints) {
            await axios.get(url);
            if (!completed) console.log(`Contestant #${constestantId} reached ${url}!`);
        }
        completed = true;
        observer.next(constestantId);
    } catch (e) {
        observer.error(e);
    }
    observer.complete();
}

const observableCount: number = Number(process.argv.reverse()[0]);

if (isNaN(observableCount)) {
    console.log("Please provide a number as the last argument.")
} else {
    gamble(observableCount, checkpoints);
}
