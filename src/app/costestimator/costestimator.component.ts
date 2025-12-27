import { Component } from '@angular/core';

@Component({
  selector: 'app-costestimator',
  templateUrl: './costestimator.component.html',
  styleUrls: ['./costestimator.component.css']
})
export class CostestimatorComponent {
type = 'Residential';
plotArea = 1000;
floors = 1;

packages = [
  { name: 'Basic', rate: 1650 },
  { name: 'Standard', rate: 2100 },
  { name: 'Premium', rate: 2800 }
];

selectedPackage = 'Standard';

get selectedRate() {
  return this.packages.find(p => p.name === this.selectedPackage)?.rate || 0;
}

get estimatedCost() {
  return this.plotArea * this.floors * this.selectedRate;
}

/* Donut Chart */
chartData = {
  labels: ['Materials', 'Services & Fees','Labour'],
  datasets: [
    {
      data: [990000, 247500, 412500],
      backgroundColor: ['#ff7a00', '#16a34a','#c3c0daff'],
      borderWidth: 1
    }
  ]
};

chartOptions = {
  cutout: '30%',
  plugins: {
    legend: { display: false }
  }
};

setType(val: string) {
  this.type = val;
}

selectPackage(pkg: any) {
  this.selectedPackage = pkg.name;
}
resetpack(){
  this.selectedPackage ='Standard';
  console.log('clicked',this.selectedPackage)
}

}
