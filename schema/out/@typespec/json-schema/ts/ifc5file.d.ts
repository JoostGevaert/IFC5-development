/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Ifc5FileJson = (ClassJson | DefJson | OverJson | DisclaimerJson)[];

export interface ClassJson {
  def: "class";
  type?: "UsdGeom:Mesh" | "UsdGeom:Xform" | "UsdGeom:BasisCurves" | "UsdShade:Material" | "UsdShade:Shader" | "Xform";
  name: string;
  children?: DefJson[];
}
export interface DefJson {
  def: "def";
  type?: "UsdGeom:Mesh" | "UsdGeom:Xform" | "UsdGeom:BasisCurves" | "UsdShade:Material" | "UsdShade:Shader" | "Xform";
  name: string;
  children?: DefJson[];
  inherits?: string[];
}
export interface OverJson {
  def: "over";
  name: string;
  attributes:
    | Ifc5AlignmentsegmentComponentJson
    | Ifc5AlignmentComponentJson
    | UsdShadeMaterialComponentJson
    | Ifc5SpaceboundaryComponentJson
    | NLSFBComponentJson
    | UsdGeomBasisCurvesComponentJson
    | PropertiesComponentJson
    | CustomDataComponentJson
    | XformOpComponentJson
    | UsdShadeMaterialBindingAPIComponentJson
    | UsdGeomMeshComponentJson
    | UsdGeomVisibilityAPIvisibilityComponentJson
    | Ifc5ClassComponentJson;
}
export interface Ifc5AlignmentsegmentComponentJson {
  "ifc5:alignmentsegment":
    | {
        EndRadiusOfCurvature: number;
        PredefinedType: "LINE" | "CLOTHOID" | "CIRCULARARC" | "CONSTANTGRADIENT";
        SegmentLength: number;
        StartDirection: number;
        StartPoint: number[];
        StartRadiusOfCurvature: number;
      }
    | {
        EndGradient: number;
        PredefinedType: "LINE" | "CLOTHOID" | "CIRCULARARC" | "CONSTANTGRADIENT";
        HorizontalLength: number;
        StartDistAlong: number;
        StartGradient: number;
        StartHeight: number;
      }
    | {
        EndCantLeft: number;
        EndCantRight: number;
        HorizontalLength: number;
        PredefinedType: "CONSTANTCANT" | "LINEARTRANSITION";
        StartCantLeft: number;
        StartCantRight: number;
        StartDistAlong: number;
      };
}
export interface Ifc5AlignmentComponentJson {
  "ifc5:alignment": {
    segments: {
      ref: string;
    }[];
  };
}
export interface UsdShadeMaterialComponentJson {
  "UsdShade:Material": {
    "outputs:surface.connect": {
      ref: string;
    };
  };
}
export interface Ifc5SpaceboundaryComponentJson {
  "ifc5:spaceboundary": {
    relatedElement: {
      ref: string;
    };
  };
}
export interface NLSFBComponentJson {
  "nlsfb:class": unknown;
}
export interface UsdGeomBasisCurvesComponentJson {
  "UsdGeom:BasisCurves": {
    points: number[][];
  };
}
export interface PropertiesComponentJson {
  "ifc5:properties": unknown;
}
export interface CustomDataComponentJson {
  customdata: unknown;
}
export interface XformOpComponentJson {
  xformOp: {
    transform: number[][];
  };
}
export interface UsdShadeMaterialBindingAPIComponentJson {
  "UsdShade:MaterialBindingAPI": {
    "material:binding": {
      ref: string;
    };
  };
}
export interface UsdGeomMeshComponentJson {
  "UsdGeom:Mesh": {
    faceVertexIndices: number[];
    points: number[][];
  };
}
export interface UsdGeomVisibilityAPIvisibilityComponentJson {
  "UsdGeom:VisibilityAPI:visibility": {
    visibility: "visible" | "invisible";
  };
}
export interface Ifc5ClassComponentJson {
  "ifc5:class": {
    code: string;
    uri: string;
  };
}
export interface DisclaimerJson {
  disclaimer: string;
}
