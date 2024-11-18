# IFC 5

> While IFC 5 incorporates some terms and concepts from USD, IFC 5 remains fundamentally distinct and purpose-built for the specific needs of the AEC (Architecture, Engineering, and Construction) industry. We are leveraging certain aspects of USD to enhance the reliability and ease of adoption of IFC 5; however, IFC 5 is not an implementation of USD, nor is USD a substitute for IFC 5. IFC 5 has unique requirements and specialised use-cases that are not addressed within USD or openUSD.
>
> **Our selective integration of USD terminology and concepts serves to improve IFC 5’s adoptability while ensuring that IFC 5 continues to meet the precise needs of our industry.**

# Hello Wall

## Find the other class of the wall

> Besides 'IfcWall' the wall in our hello-wall example has another class associated to it. Can you find it? Post the 'code' and 'URI' here.

Besides the `"Ifc5:class" "IfcWall"`, the wall in the hello-wall example also has the `"nlsfb:class" "21.21"` associated to it, which is defined on lines 671 - 680:

```json
{
  "def": "over",
  "name": "N93791d5d5beb437bb8ec2f1f0ba4bf3b",
  "attributes": {
   "nlsfb:class": {
    "code": "21.21",
    "uri": "https://identifier.buildingsmart.org/uri/nlsfb/nlsfb2005/2.2/class/21.21"
   }
  }
 },

So:
"code": "21.21",
"uri": "https://identifier.buildingsmart.org/uri/nlsfb/nlsfb2005/2.2/class/21.21"
```

## Split the hello wall example in 3 files

> Use https://ifc5.technical.buildingsmart.org/viewer/Links to an external site. to view the 'Hello Wall' example.
> 
> Then take the hello-wall.ifcx file and split it into 3 different files. Load the 3 files all in your viewer again. Did you see the same result? Post a screenshot and/or the 3 files below.
>
> Tip: select all the mesh objects and put them into a separate file. That will give you geometry-data and other-data in separate files. 

- [hello-wall-1.ifcx](./HelloWall/hello-wall-1.ifcx)
- [hello-wall-2.ifcx](./HelloWall/hello-wall-2.ifcx)
- [hello-wall-3.ifcx](./HelloWall/hello-wall-3.ifcx)

## Did you understand the Hello Wall example?

Q: Besides IfcWall, what other class does the wall in our example have?  
A: 21.21

Q: What is in an IFC 5 file?  
A: A collection of data objects that either make up a complete dataset or not

Q: What encoding does an IFC 5 file have in these examples?  
A: JSON

Q: What is the maximum amount of files that can be used to split up the Hello Wall file?  
A: An infinite number of files

# Structure

## Can you find the parent of the Windows?

> What is the 'name' (identifier) of the 'parent' ('host') of 'Window' and 'Window_001'? Post the 'name' below.
>
> Bonus: what other children does this parent have?

The parent of `'Window'` and `'Window_001'` is the class defined on lines 132 - 177 of `hello-wall.ifcx`:

```json
{
  "def": "class",
  "type": "UsdGeom:Xform",
  "name": "N93791d5d5beb437bb8ec2f1f0ba4bf3b",
  "children": [
   {
    "def": "def",
    "type": "UsdGeom:Mesh",
    "name": "Body",
    "inherits": [
     "</N93791d5d5beb437bb8ec2f1f0ba4bf3b_Body>"]
   },
   {
    "def": "def",
    "type": "UsdGeom:BasisCurves",
    "name": "Axis",
    "inherits": [
     "</N93791d5d5beb437bb8ec2f1f0ba4bf3b_Axis>"]
   },
   {
    "def": "def",
    "type": "UsdGeom:BasisCurves",
    "name": "Directrix",
    "inherits": [
     "</N93791d5d5beb437bb8ec2f1f0ba4bf3b_Directrix>"]
   },
   {
    "def": "def",
    "type": "UsdGeom:Mesh",
    "name": "Basis",
    "inherits": [
     "</N93791d5d5beb437bb8ec2f1f0ba4bf3b_Basis>"]
   },
   {
    "def": "def",
    "name": "Window",
    "inherits": [
     "</N2c2d549ff9fe4e228590562fda81a690>"]
   },
   {
    "def": "def",
    "name": "Window_001",
    "inherits": [
     "</N592504dc469a44d69ae8c801b591679b>"]
   }]
 },
```

The `'name'` (identifier) of the `'parent'` ('host') of `'Window'` and `'Window_001'` is:
`"name": "N93791d5d5beb437bb8ec2f1f0ba4bf3b"`

Bonus: see above for the other children of the parent of `'Window'` and `'Window_001'`.

## Why the extra 'inherits layer' in the tree?

> Look at the Miro board of the example: https://miro.com/app/board/uXjVLFWyplw=/?share_link_id=723521721515Links to an external site.
>
> The 'classical' tree structure of IFC with project -> site -> building -> building storey -> etc.. is clearly visible in the viewer. But in the JSON structure there is an extra abstraction layer that uses 'inheritance' and 'children' of the abstract parent.
>
> This is clearly done intentional. Why is that? If you think you have the answer, post it below.

### Joost's answer

Adding an additional layer that uses 'inheritance' and 'children' makes IFC 5 more modular than previous versions of IFC.

This is what allows one to build up an IFC 5 model from multiple `.ifcx` files.

Moreover, it makes it easier to swap out geometries, classes and attributes, while not changing the tree structure.

### bSI's answer

The extra parent/inheritance setup is used in the tree structure to make sure identification can be done on objects regardless of their location in the tree.

# USD

## IFC 5 and USD

Q: What is the relationship between IFC 5 and USD (Universal Scene Description)?  
A: IFC 5 borrows some terms and concepts from USD but remains distinct and purpose-built for specific AEC requirements.

Q: IFC 5 is using the USD file format  
A: Niet Waar

Q: Which concepts/elements from USD are used in IFC 5?  
A:
- Def
- Class
- Over
- UsdGeom:Mesh

Q: Why does IFC 5 have the strong inheritance/child structure?  
A: To link information to objects that can still change position in the tree

Q: How about layers?  
A:
- Layers can be seen as 'files' or 'datastreams'
- USD starts with one file and gathers all the layers it finds by following all references.
- IFC 5 leaves the order of the layers (files/data-streams) to the end-user(s).
- While USD focusses on one 'truth' that is displayed, IFC 5 expects software tools to show differences of opinion from different layers.

# Add a 3rd window

```json
[
  {
    "disclaimer": "2024-11-12 update of the examples. (C) buildingSMART International. Published under CC BY-ND 4.0."
  },
  {
    "def": "over",
    "type": "UsdGeom:Xform",
    "name": "N93791d5d5beb437bb8ec2f1f0ba4bf3b",
    "children": [
      {
        "def": "def",
        "name": "Window_002",
        "inherits": [
          "</N592504dc469a44d69ae8c801b591613c>"
        ]
      }
    ]
  },
  {
    "def": "class",
    "type": "UsdGeom:Xform",
    "comment": "this is the instance of Window_002",
    "name": "N592504dc469a44d69ae8c801b591613c",
    "inherits": [
     "</N25503984660543a18597eae657ff5bea>"]
   },
   {
    "def": "over",
    "name": "N592504dc469a44d69ae8c801b591613c",
    "attributes": {
     "xformOp": {
      "transform": [
       [1,0,0,0],
       [0,1,0,0],
       [0,0,1,0],
       [7,0,1,1]
      ]
     }
    }
  }
]
```
