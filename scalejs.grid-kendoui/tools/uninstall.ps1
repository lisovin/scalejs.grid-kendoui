param($installPath, $toolsPath, $package, $project)

$project |
	Remove-Paths 'scalejs.grid-kendoui,kendo.grid' |
	Remove-Shims 'kendo.grid' | 
	Remove-ScalejsExtension 'scalejs.grid-kendoui' |
	Out-Null
