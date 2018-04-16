//=== Create a list of n random integers from 0 to n-1 ===

for (var alist = [], i = 0; i < 10000000; ++i) alist[i] = i;

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

alist = shuffle(alist);

//=== Merge sort. If you want, you can uncomment the console.log lines, and it'll show you what happens during the sort. ===

function mergeSort(alist) {
    //console.log("Splitting", alist);
    if (alist.length > 1) {
        let mid = alist.length / 2;
        mid = Math.floor(mid);
        let left_half = alist.slice(0,mid);
        let right_half = alist.slice(mid,alist.length);

        mergeSort(left_half);
        mergeSort(right_half);

        let i = 0;
        let j = 0;
        let k = 0;

        while ((i < left_half.length) && (j < right_half.length)) {
            if (left_half[i] < right_half[j]) {
                alist[k++] = left_half[i++];
            } else {
                alist[k++] = right_half[j++];
            }
        }
        
        while (i < left_half.length) {
            alist[k++] = left_half[i++];
        }
        
        while (j < right_half.length) {
            alist[k++] = right_half[j++];
        }
    }
    //console.log("Merging", alist)
}
   
let t0 = new Date().getTime();
mergeSort(alist);
let t1 = new Date().getTime();
let total_time = (t1 - t0) / 1000

console.log('Total time taken to mergeSort a list of length', alist.length + ':', total_time + 's')