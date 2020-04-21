import React from 'react';

interface BodyImageProps {
  muscleId?: number;
  onMuscleClick: Function;
}

const BodyImage: React.FC<BodyImageProps> = ({muscleId, onMuscleClick}) => {


  return (
    <svg version="1.1" id="Map" className="body-image" viewBox="0 0 578 538">
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Pec_Mayoris" points="144,116,142,149,159,156,183,150,190,130,169,116" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Pec_Mayoris" points="90,128,94,150,117,156,135,149,134,117,109,117" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Rectus_Abdominis" points="155,159,159,171,160,205,160,241,155,255,152,269,143,278,142,221,141,179,142,154" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Oblique" points="185,169,182,154,161,160,164,171,165,218,178,207,180,185,182" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Oblique" points="100,206,98,190,93,169,96,154,117,159,113,169,113,219" />
    <polygon onClick={()=>onMuscleClick(1)} className={"body-piece " + (muscleId === 1 ? 'body-piece_active' : '')}
      id="Right_Biceps_Brachii_Long_Head" points="58,181,61,189,73,176,88,146,85,135,67,151" />
    <polygon onClick={()=>onMuscleClick(7)} className={"body-piece " + (muscleId === 7 ? 'body-piece_active' : '')}
      id="Left_Neck" points="153,72,141,96,141,110,168,112,190,124,187,104,172,100,160,89" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Neck" points="88,124,91,105,106,100,118,88,126,74,137,97,136,110,110,111" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Deltoids_Front" points="209,144,212,131,211,115,203,107,191,103,194,119,192,130" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Deltoids_Front" points="86,130,69,144,66,131,67,114,77,105,87,105,83,120" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Head_Front" points="121,21,115,43,120,62,130,71,139,76,151,69,158,61,162,39,157,20,139,14" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="GROINS" points="146,284,150,320,164,284,169,259,176,245,164,241,156,270" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="GROINS" points="134,285,127,321,120,298,116,291,114,277,110,265,102,244,114,240,119,257,124,272" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="QUADS" points="102,256,108,279,108,327,101,350,93,339,89,308,86,287,89,261,96,246" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="QUADS" points="112,331,111,289,118,304,126,331,122,345,115,372,106,373,104,357" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Knee_Front" points="100,357,102,365,104,375,106,384,103,398,90,398,84,388,84,375,91,367" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Tibialis_Anterior" points="192,407,197,390,205,409,212,425,209,474,212,493,200,493" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Shin" points="195,492,188,404,177,402,174,412,174,419,178,448" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Shin" points="104,402,105,412,105,423,103,436,103,447,96,460,92,473,83,491,84,474,86,456,87,444,88,430,90,416,91,403" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Tibialis_Anterior" points="78,491,85,418,86,407,81,392,78,400,72,410,68,425,71,475,68,493" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Brachioradialis" points="32,231,42,198,53,186,57,196,64,194,28,253,17,259" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="QUADS" points="97,353,82,371,80,349,80,326,83,294,89,341" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Knee_Front" points="178,357,194,376,194,387,188,399,176,398,171,384" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="QUADS" points="193,291,198,318,198,358,195,371,180,353,189,341" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="QUADS" points="172,273,175,259,181,246,189,262,191,288,184,340,177,351,170,329,169,287,190" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="QUADS" points="163,371,153,330,166,293,167,333,174,356,171,373,171" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Rectus_Abdominis" points="124,158,136,154,137,179,136,221,135,277,126,268,117,238,117,206,118,172" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Brachioradialis" points="224,185,221,194,213,193,250,255,262,260,246,233,237,201,186" />
    <polygon onClick={()=>onMuscleClick(1)} className={"body-piece " + (muscleId === 1 ? 'body-piece_active' : '')}
      id="Left_Biceps_Brachii_Short_Head" points="187,150,187,165,203,192,207,186,202,179" />
    <polygon className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Flexor_Digitorum" points="207,191,207,204,214,220,226,234,243,262,249,258" />
    <polygon onClick={()=>onMuscleClick(1)} className={"body-piece " + (muscleId === 1 ? 'body-piece_active' : '')}
      id="Left_Biceps_Brachii_Long_Head" points="192,135,189,148,204,176,217,190,220,183,210,150" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Flexor_Digitorum" points="34,262,50,236,63,220,70,203,69,190,29,256" />
    <polygon onClick={()=>onMuscleClick(1)} className={"body-piece " + (muscleId === 1 ? 'body-piece_active' : '')}
      id="Right_Biceps_Brachii_Short_Head" points="72,184,90,150,90,163,73,193" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Head_Back" points="448,6,437,8,425,19,424,36,435,53,460,53,468,38,469,17,460,9" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Trapezius" points="434,57,441,57,440,96,441,158,419,131,412,102,402,92,421,84,432,70" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Trapezius" points="452,57,460,57,462,70,472,83,491,92,481,101,474,131,452,158,454,96" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Deltoids_Back" points="398,93,383,98,370,110,372,132,386,122,393,115" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Deltoids_Back" points="496,93,513,99,523,111,521,132,505,121,499,112" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Latissimus_Dorsi" points="402,97,395,121,396,136,409,183,440,173,440,162,415,133,408,103" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Latissimus_Dorsi" points="491,97,498,122,497,138,484,183,453,173,453,162,478,134,485,104" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 2 ? 'body-piece_active' : '')}
      id="Left_Triceps_Lateral" points="392,123,371,137,363,176,368,198,380,156,392,137" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 2 ? 'body-piece_active' : '')}
      id="Right_Triceps_Lateral" points="502,124,522,137,531,178,525,199,512,154,501,137" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 2 ? 'body-piece_active' : '')}
      id="Left_Triceps_Medial" points="9392,-118143,9392,-118167,9383,-118183,9374,-118188,9382,-118160" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 2 ? 'body-piece_active' : '')}
      id="Right_Triceps_Medial" points="500,143,510,158,518,188,509,183,500,168" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Erector_Spinae" points="441,177,410,187,412,202,445,246,439,201" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Erector_Spinae" points="452,177,483,187,481,202,448,246,454,203" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Extensor_Digitorum" points="532,184,543,202,548,227,564,256,555,251,536,216,527,203" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Flexor_Carpi" points="520,193,511,189,515,205,543,250,548,262,551,252" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Extensor_Digitorum" points="361,184,350,203,345,226,329,256,338,251,358,214,366,201" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Flexor_Carpi" points="373,193,381,189,378,204,351,248,345,261,341,252" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="GLUTES" points="434,240,400,261,399,285,403,302,440,291,445,276" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="GLUTES" points="459,239,449,275,452,290,489,302,493,286,492,261" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="GROINS" points="442,295,434,295,426,301,435,345,443,325,444,310" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="GROINS" points="451,294,460,296,468,302,458,345,451,326,449,310" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="HAMSTRINGS" points="397,293,402,310,415,302,412,324,410,359,398,378,397,351,394,338,393,315" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="HAMSTRINGS" points="497,292,492,309,479,302,483,327,485,359,496,378,497,353,500,340,502,316" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="HAMSTRINGS" points="420,301,433,349,424,398,414,365,416,324" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="HAMSTRINGS" points="474,301,478,326,480,366,470,398,461,350" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Left_Knee_Back" points="410,366,402,380,408,397,417,388" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="Right_Knee_Back" points="485,367,477,389,486,397,492,380" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="CALVES" points="398,383,396,399,387,428,385,459,389,469,396,460,399,429,404,408,404,398" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="CALVES" points="417,394,412,400,407,410,402,430,400,457,409,476,420,454,421,403" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="CALVES" points="477,394,473,402,474,454,485,475,495,457,491,428,486,406" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="CALVES" points="495,383,499,402,507,427,509,459,504,468,499,461,495,428,489,401" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="CALVES" points="396,466,400,466,408,480,401,523,396,508,392,472" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="CALVES" points="493,466,498,466,502,472,498,507,494,522,487,481" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="PERONEALS" points="390,484,395,521,390,528,387,518" />
    <polygon onClick={()=>onMuscleClick(2)} className={"body-piece " + (muscleId === 3 ? 'body-piece_active' : '')}
      id="PERONEALS" points="504,482,499,521,503,528,508,517" />
</svg>
  )
}

export default BodyImage;