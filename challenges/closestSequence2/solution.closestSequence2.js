/*
	Idea:
	 * Take algorithm "Dynamic Time Warp" as template
	 * Do not allow sequence "a" to warp smaller / compress,
	   the depending cost would be infinite
	 * Draw distance matrix between the two sequences for the example.
	   Observe the "closestSequence" by following the least-steep distance path.
	   You are allowed to walk diagonally = "take number b_i" or vertically "skip number b_i"
	 * Use dynamic programming to improve performance:
	   Do not fill whole matrix, you can succeed by just keeping the current b_i "Dcurrent" row
	   and the previous b_(i-1) "Dprev" row. Use a seperate array "DistanceUntil" to store the
	   best accumulated cost.
*/

function closestSequence2(a, b) {
	var d = function(p,q) {
		return Math.abs(p-q);
	}
	
	// init previous distance array
	var Dprev = Array(a.length).fill(Infinity);
	
	// prepare local "closestSequence" distance array
	var DistanceUntil = Array(a.length).fill(Infinity);
	
	// DTW algorithm
	for (var i=0; i<b.length; i++) {
	
		// init current distance array
		var Dcurrent = [];
	
		for (var j=0; j<a.length; j++) {
			
			var DTWi1j0 = Infinity // Dprev[j] // would be DTW default
			var DTWi1j1 = j===0 ? 0 : Dprev[j-1];
			var DTWi0j1 = j===0 ? 0 : Dcurrent[j-1];
			
			var Dmin = Math.min(DTWi1j0,  // insertion
			                    DTWi0j1,  // deletion
			                    DTWi1j1)  // match
			
			Dcurrent[j] = d(a[j], b[i]) + Dmin;
		}
		Dprev = Dcurrent;
		
		// "closestSequence" measurement
		DistanceUntil = Dcurrent.map(
			function(q,qi) {
				var thisDistance = Math.abs(q - (Dcurrent[qi-1] || 0));
				return Math.min(DistanceUntil[qi], thisDistance + (DistanceUntil[qi-1] || 0));
			}
		);
	}
	
	return DistanceUntil[a.length-1];    
}
