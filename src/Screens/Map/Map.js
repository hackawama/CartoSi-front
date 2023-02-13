
import Tree from 'react-d3-tree';
import { useCenteredTree } from './helpers';


const orgChart = {
  name: 'CEO',
  attributes: {
    department: 'Production',
    icon: "site.png",
    label: "BATIMENT DPSIC"
  },
  children: [
    {
      name: 'Manager',
      attributes: {
        department: 'Production',
        icon: "building.png",
        label: "ETAGE 0"
      },
      children: [
        {
          name: 'Foreman',
          attributes: {
            department: 'Production',
            icon: "building.png",
            label: "Salle Officier"
          },
          children: [
            {
              name: 'Worker',
              attributes: {
                department: 'Production',
                icon: "workstation.png",
                label: "Computer 1"
              },
            },
            {
              name: 'Worker',
              attributes: {
                department: 'Production',
                icon: "workstation.png",
                label: "Computer 2"
              },
            },
            {
              name: 'Worker',
              attributes: {
                department: 'Production',
                icon: "workstation.png",
                label: "Computer 3"
              },
            },
            {
              name: 'Worker',
              attributes: {
                department: 'Production',
                icon: "phone.png",
                label: "3229"
              },

            },
          ],
        },

        {
          name: 'Foreman',
          attributes: {
            department: 'Production',
            icon: "building.png",
            label: "Salle S/OFF"
          },
          children: [
            {
              name: 'Worker',
              attributes: {
                department: 'Production',
                icon: "phone.png",
                label: "3228"
              },

            },
            {
              name: 'Worker',
              attributes: {
                department: 'Production',
                icon: "switch.png",
                label: "Switch 1"
              },
              children: [
                {
                  name: 'Worker',
                  attributes: {
                    department: 'Production',
                    icon: "workstation.png",
                    label: "Computer i1"
                  },
                },

                {
                  name: 'Worker',
                  attributes: {
                    department: 'Production',
                    icon: "workstation.png",
                    label: "Computer i2"
                  },
                },
                {
                  name: 'Worker',
                  attributes: {
                    department: 'Production',
                    icon: "workstation.png",
                    label: "Computer i3"
                  },
                },
                {
                  name: 'Worker',
                  attributes: {
                    department: 'Production',
                    icon: "workstation.png",
                    label: "Computer i4"
                  },
                },
                {
                  name: 'Worker',
                  attributes: {
                    department: 'Production',
                    icon: "workstation.png",
                    label: "Computer i5"
                  },
                },
                {
                  name: 'Worker',
                  attributes: {
                    department: 'Production',
                    icon: "workstation.png",
                    label: "Computer i6"
                  },
                },
              ]
            },


            {
              name: 'Worker',
              attributes: {
                department: 'Production',
                icon: "workstation.png",
                label: "Computer 5"
              },

            },
          ],
        },
      ],
    },
  ],
};
const containerStyles = {


  position: "absolute",
  top: "0",
  left: "160px",
  right: "0",
  bottom: "0"

};

// Here we're using `renderCustomNodeElement` render a component that uses
// both SVG and HTML tags side-by-side.
// This is made possible by `foreignObject`, which wraps the HTML tags to
// allow for them to be injected into the SVG namespace.
const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps
}) => {
  console.log(nodeDatum)
  return (

    <g>
      <circle r={5}></circle>
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject {...foreignObjectProps}>
        {/* <div style={{ border: "1px solid black", backgroundColor: "#dedede" }}>
        <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
        {nodeDatum.children && (
          <button style={{ width: "100%" }} onClick={toggleNode}>
            {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
          </button>
        )}
      </div> */}

        {nodeDatum.attributes && <>
          <img src={require("./" + nodeDatum.attributes.icon)} alt="Logo" width={50} height={50} onClick={nodeDatum.children ? toggleNode : null} />
          <span>{nodeDatum.attributes.label}</span>
        </>}
      </foreignObject>
    </g>
  );
}

export default function Map() {
  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 200, y: 200 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };
  return (
    <div style={containerStyles} ref={containerRef}>
      <Tree
        data={orgChart}
        translate={translate}
        nodeSize={nodeSize}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
        }
        orientation="vertical"
      />
    </div>
  );
}

