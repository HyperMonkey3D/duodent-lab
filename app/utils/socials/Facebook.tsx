interface SVGColor {
    color: string;
    size: string;
}

export default function Facebook( {color, size}: SVGColor ) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M64 32.196C64 14.4142 49.6738 0 32.004 0C14.3262 0.0039995 0 14.4142 0 32.2C0 48.266 11.7025 61.5843 26.9966 64V41.5028H18.8776V32.2H27.0046V25.1009C27.0046 17.0339 31.784 12.5784 39.0911 12.5784C42.5947 12.5784 46.2542 13.2064 46.2542 13.2064V21.1254H42.2187C38.2472 21.1254 37.0074 23.609 37.0074 26.1567V32.196H45.8783L44.4624 41.4988H37.0034V63.996C52.2975 61.5803 64 48.262 64 32.196Z"
                fill={color}/>
        </svg>
    )
}