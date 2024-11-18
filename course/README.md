# Hello Wall

## Find the other class of the wall

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
