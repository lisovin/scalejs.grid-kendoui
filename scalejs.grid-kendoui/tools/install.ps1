param($installPath, $toolsPath, $package, $project)

$project |
	Add-Paths "{
		'scalejs.grid-kendoui' : 'Scripts/scalejs.grid-kendoui-$($package.Version)',
		'kendo.grid' : 'Scripts/kendo.grid.min',
		'knockout' : 'Scripts/knockout-2.2.1',
		'knockout.mapping' : 'Scripts/knockout.mapping-latest'
	}" |
	Add-ScalejsExtension 'scalejs.grid-kendoui' |
	Out-Null