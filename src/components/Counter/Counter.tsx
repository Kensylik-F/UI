import './Counter.scss'

interface ICount {
  size: 8 | 12 | 16 | 20 | 24;
  style?: string;
  quantity: string | number;
  pulse?: boolean;
  baseColor?: 'primary' | 'secondary'
  stroke?: boolean
}

export const Counter: React.FC<ICount> = ({
  	size,
  	quantity,
  	pulse = false,
  	style = 'dynamic/surface/base/secondary',
    baseColor = 'primary',
    stroke,
}) => {
  const getValue = () => {
    if(size == 8 || size == 12){
      return ''
    }else{
      if (typeof quantity === 'number') {
        return quantity > 99 ? '99+' : quantity;
      } else {
        return quantity.length > 3 ? quantity.substring(0, 3) : quantity;
      }

    }
  };

  const showAnimate = pulse && (size === 8 || size === 12);


  const getStroke = () =>{
    switch(size){
      case 8:
        return 1;
      case 12:
      case 16:
      case 20:
        return 2;
      case 24:
        return 3
      default:
        return 0
    }
  }

  const isSingleChar = typeof quantity === 'number' ? quantity < 10 : quantity.length === 1;

  const getPadding = () =>{
    if(typeof quantity === 'number'){
      if(!isSingleChar){
        switch (size) {
          case 24:
            return quantity > 9 ? '6px' : '0';
          case 20:
          case 16:
            return quantity > 9 ? '4px' : '0';
          default:
            return '0';
        }
      }
    }
    return '0'
  }
  const getDimensions = ():{width: number,height: number } => {
    if (size === undefined) {
      throw new Error("Size must be defined");
    }
      if (isSingleChar) {
        return {width: size, height:size}
      } else {
        return { width: size + parseInt(getPadding()), height: size +  parseInt(getPadding())};
      }
  };

  const dimensions = getDimensions();

  const counterStyle = [
    `counter`,
    showAnimate ? 'pulse' : '',
    `size-${size}`,
    `baseColor-${baseColor}`
  ].join(' ')
  return (
    <div
      className={counterStyle}
      style={{ 
        borderColor: style,
        borderWidth: stroke ? getStroke() : 0,
        width: dimensions.width,
        height: dimensions.height,
        boxSizing: 'border-box',
        padding: getPadding(),    
        fontSize: `${size}px`    
      }}
    > 
      {showAnimate ? (
        <>
          <div className="red-dot" ></div>
          <div className="pulse one"></div>
          <div className="pulse two"></div>
        </>
      ) : (
        <p>{getValue()}</p>
      )}
    </div>
  );
};