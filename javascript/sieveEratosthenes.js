function sieveEratosthenes(n) {
  var primes = new Array(n-1).fill(true);
  function callback(element, index) {
    if (element) return index+2;
  }
 
  for (p = 2; p*p <= n; p++) {
    for (i = p; i*p <= n ; i++) {
        primes[i*p-2] = false;
    }
  }
  return primes.map(callback).filter(function(e){ return e; });
}
